// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract to place orders for food and pay for them
contract CryptoOrder {

    struct Table {
        uint restaurantChainId;
        uint locationId;
        uint table;
        bool isDelivered;
        bool takeaway;
        bool isPaid;
    }

    struct Order {
        address buyer;
        uint foodId;
        string foodName;
        uint price;
        bool isDelivered;
        bool isPaid;
    }

    address public owner;
    mapping(address => Order[]) public orders;
    uint public orderCount;

    event OrderPlaced(address indexed buyer, uint foodId, uint price);
    event OrderDelivered(address indexed buyer, uint foodId);
    event OrderPaid(address indexed buyer, uint foodId, uint amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function placeOrder(uint _foodId, string memory _foodName, uint _price) public payable {
        require(msg.value == _price, "Incorrect payment amount");

        orders[msg.sender].push(Order({
            buyer: msg.sender,
            foodId: _foodId,
            foodName: _foodName,
            price: _price,
            isDelivered: false,
            isPaid: false
        }));

        orderCount++;
        emit OrderPlaced(msg.sender, _foodId, _price);
    }

    function markOrderAsDelivered(address _buyer, uint _foodId) public onlyOwner {
        Order[] storage buyerOrders = orders[_buyer];
        
        for (uint i = 0; i < buyerOrders.length; i++) {
            if (buyerOrders[i].foodId == _foodId) {
                buyerOrders[i].isDelivered = true;
                emit OrderDelivered(_buyer, _foodId);
                return;
            }
        }
    }

    function payForOrder(address _buyer, uint _foodId) public onlyOwner {
        Order[] storage buyerOrders = orders[_buyer];
        
        for (uint i = 0; i < buyerOrders.length; i++) {
            if (buyerOrders[i].foodId == _foodId && buyerOrders[i].isDelivered && !buyerOrders[i].isPaid) {
                buyerOrders[i].isPaid = true;
                payable(owner).transfer(buyerOrders[i].price);
                emit OrderPaid(_buyer, _foodId, buyerOrders[i].price);
                return;
            }
        }
    }

    function getOrdersByBuyer(address _buyer) public view returns (Order[] memory) {
        return orders[_buyer];
    }
}

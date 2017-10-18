struct ItemStatus {
    1: required string itemId;
    2: required i32 qty;
}

service InventoryService {
    ItemStatus get(string itemId)
}

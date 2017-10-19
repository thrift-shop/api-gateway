struct ItemStatus {
    1: required string itemId;
    2: required i32 qty;
}

exception ItemStatusUnavailable {
    1: string message;
}

service InventoryService {
    ItemStatus get(string itemId) throws (1: ItemStatusUnavailable unavailabe)
    ItemStatus reduce(string itemId, i32 qty) throws (1: ItemStatusUnavailable unavailabe)
}

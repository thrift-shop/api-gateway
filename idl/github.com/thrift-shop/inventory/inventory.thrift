include "../catalog/catalog.thrift"

struct ItemStatus {
    1: required catalog.ItemID itemId;
    2: required i32 qty;
}

exception ItemStatusException {
    1: string message;
    2: required i32 id;
}

service InventoryService {
    ItemStatus get(catalog.ItemID itemId) throws (1: ItemStatusException itemException)
    ItemStatus reduce(catalog.ItemID itemId, i32 qty) throws (1: ItemStatusException itemException)
}

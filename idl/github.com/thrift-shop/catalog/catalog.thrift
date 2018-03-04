typedef string ItemID

struct Item {
    1: required ItemID itemId;
    2: required i32 version;
    3: required string name;
    4: optional string description;
}

service CatalogService {
    list<Item> getAll()
}

json.items do
  json.array!(@items) do |item|
    json.title item.title
    json.description item.description
    json.price item.price
    json.user_email item.user.email
    json.city item.city
    json.state item.state
    json.phone item.phone
    json.email item.email
    json.comments item.comments
    json.category item.category
  end
end

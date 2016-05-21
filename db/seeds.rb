100.times do
  Contact.create!(
  name: Faker::Name.name,
  phone: Faker::PhoneNumber.cell_phone,
  email: Faker::Internet.email
  )
end

puts "seeding..."

art = User.create(username: "Art", password: "gobuffalo")
anne = User.create(username: "Anne", password: "gardenlove")
chuck = User.create(username: "Chuck", password: "wilhelt")

boris = Artist.create(name: "Boris", genre: "Sludge Metal", members: "Atsuo, Takeshi, Wata")
melvins = Artist.create(name: "The Melvins", genre: "Metal", members: "Buzz Osbourne, Dale Crover, Steve McDonald")
run_the_jewels = Artist.create(name: "Run The Jewels", genre: "Rap", members: "Killer Mike, El-P")
beach_house = Artist.create(name: "Beach House", genre: "Dream-pop", members: "Victoria Legrand, Alex Scally")
arctic_monkeys = Artist.create(name: "Arctic Monkeys", genre: "Rock n' Roll", members: "Alex Turner, Jamie Cook, Matt Helders, Nick O,Malley")
tool = Artist.create(name: "Tool", genre: "Progressive Rock", members: "Maynard James Keenan, Danny Carey, Adam Jones, Justin Chancellor")
elder = Artist.create(name: "Elder", genre: "Progressive Metal", members: "Nick DeSalvo, Mike Risberg, Jack Donovan, Georg Edert")
das_racist = Artist.create(name: "Das Racist", genre: "Hip-Hop", members: "Kool A.D., Himanshu")

empire_live = Venue.create(name: "Empire Live", location: "93 N Pearl St")
proctors = Venue.create(name: "Proctor's Theatre", location: "432 State St")
the_palace = Venue.create(name: "Palace Theatre", location: "1564 Broadway")
the_egg = Venue.create(name: "The Egg", location: "Empire State Plaza")
upstate_concert_hall = Venue.create(name: "Upstate Concert Hall", location: "1208 Route 146")

show_1 = Show.create(title: "Twins of Evil", rating: 4, date: "9/30", artist_id: melvins.id, venue_id: empire_live.id)
show_2 = Show.create(title:"Beasts of the East", rating: 5, date: "9/31", artist_id: boris.id, venue_id: empire_live.id)
show_3 = Show.create(title: "British Invasion", rating: 8, date: "4/25", artist_id: arctic_monkeys.id, venue_id: the_egg.id)
show_4 = Show.create(title: "DR live", rating: 6, date: "3/18", artist_id: das_racist.id, venue_id: upstate_concert_hall.id)
show_5 = Show.create(title: "Prog Heaven", rating: 9, date: "5/5", artist_id: elder.id, venue_id: the_palace.id)

puts "Doneski!!!"
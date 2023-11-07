puts "seeding..."

art = User.create(username: "Art", type: "Goer", password: "gobuffalo", bio: "I pretty much like most music, except for country!")
anne = User.create(username: "Anne", type: "Goer", password: "gardenlove", bio: "Only the bluegrass and folk shows for me, I'm too old for Rap")
chuck = User.create(username: "Chuck", type: "Promoter", password: "wilhelt", bio: "The dark arts are perferred")


boris = Artist.create(name: "Boris", genre: "Sludge Metal", members: "Atsuo, Takeshi, Wata", image: "https://i.pinimg.com/736x/13/1b/ea/131bea5af3b3daed101e35891b4acfcd--guitarist-the-band.jpg")
melvins = Artist.create(name: "The Melvins", genre: "Metal", members: "Buzz Osbourne, Dale Crover, Steve McDonald", image: "http://juicemagazine.com/home/wp-content/uploads/2015/04/melvinszz.jpg")
run_the_jewels = Artist.create(name: "Run The Jewels", genre: "Rap", members: "Killer Mike, El-P", image: "https://cloud.mp3waxx.com/wp-content/uploads/2020/08/Run-the-jewels.jpg")
beach_house = Artist.create(name: "Beach House", genre: "Dream-pop", members: "Victoria Legrand, Alex Scally", image: "https://www.uncut.co.uk/wp-content/uploads/2015/02/beachhousepmvh100112-9.jpg")
arctic_monkeys = Artist.create(name: "Arctic Monkeys", genre: "Rock n' Roll", members: "Alex Turner, Jamie Cook, Matt Helders, Nick O,Malley", image: "https://stonemusic.it/wp-content/uploads/2018/04/Arctic-Monkeys-Widescreen.jpg")
tool = Artist.create(name: "Tool", genre: "Progressive Rock", members: "Maynard James Keenan, Danny Carey, Adam Jones, Justin Chancellor", image: "https://www.revolvermag.com/sites/default/files/media/images/article/tool.jpg")
elder = Artist.create(name: "Elder", genre: "Progressive Metal", members: "Nick DeSalvo, Mike Risberg, Jack Donovan, Georg Edert", image: "https://consequenceofsound.net/wp-content/uploads/2020/01/Elder.jpg")
das_racist = Artist.create(name: "Das Racist", genre: "Hip-Hop", members: "Kool A.D., Himanshu", image: "https://media.nbcnewyork.com/2019/09/Das_Racist.jpg?fit=722%2C406")

empire_live = Venue.create(name: "Empire Live", location: "93 N Pearl St", image:"https://s.hdnux.com/photos/01/21/50/52/21400248/6/1200x0.jpg")
proctors = Venue.create(name: "Proctor's Theatre", location: "432 State St", image:"https://www.newyorkbyrail.com/wp-content/uploads/2017/07/proctors-theatre.jpg")
the_palace = Venue.create(name: "Palace Theatre", location: "1564 Broadway", image:"http://upload.wikimedia.org/wikipedia/commons/4/48/PalaceTheater.JPG")
the_egg = Venue.create(name: "The Egg", location: "Empire State Plaza", image:"http://www.rogerhodgson.com/documents/theegg2.jpg")
upstate_concert_hall = Venue.create(name: "Upstate Concert Hall", location: "1208 Route 146", image:"https://i.ytimg.com/vi/YZoRLQNzGHk/maxresdefault.jpg")

show_1 = Show.create(title: "Twins of Evil", date: "9/30", artist_id: melvins.id, venue_id: empire_live.id)
show_2 = Show.create(title:"Beasts of the East", date: "9/31", artist_id: boris.id, venue_id: empire_live.id)
show_3 = Show.create(title: "British Invasion", date: "4/25", artist_id: arctic_monkeys.id, venue_id: the_egg.id)
show_4 = Show.create(title: "DR live", date: "3/18", artist_id: das_racist.id, venue_id: upstate_concert_hall.id)
show_5 = Show.create(title: "Prog Heaven", date: "5/5", artist_id: elder.id, venue_id: the_palace.id)
show_6 = Show.create(title: "Dreamers", date: "11/1", artist_id: beach_house.id, venue_id: proctors.id)
show_7 = Show.create(title: "Fear Inoculum Tour", date: "2/12", artist_id: tool.id, venue_id: the_egg.id)
show_8 = Show.create(title: "RTJ4 WorldWide", date: "10/18", artist_id: run_the_jewels.id, venue_id: the_palace.id)

puts "Doneski!!!"
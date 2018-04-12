# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


photos = [

]
User.create!(password: 'password',
            first_name: 'Demo',
            last_name: 'User',
            email: 'email'
)

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    password: 'password',
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}@#{last_name}.com",
  )
end

route_seeds = [{  creator: User.first,
    description: 'This is a 0.6 mi route that starts at 2230-2250 Franklin St, San Francisco, CA 94109, USA',
    name: 'asdf',
    request: '{"origin":{"location":{"lat":37.795192915637024,"lng":-122.42476911189556}},"destination":{"location":{"lat":37.79709196216773,"lng":-122.41429776790142}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.795192915637,
    log: -122.424769111896,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: 'wzteFfcfjVkANg@{Hg@aIGSWgDAm@GqBO@MwBk@sIEq@s@_NWqD?I',
    distance: 0.6},
    {
    creator: User.first,
    description: 'This is a 0.4 mi route that starts at 2260 California St, San Francisco, CA 94115, USA',
    name: 'asdfadsf',
    request: '{"origin":{"location":{"lat":37.78915633640924,"lng":-122.43206002655029}},"destination":{"location":{"lat":37.79234425431025,"lng":-122.42879846038818}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7891563364092,
    log: -122.43206002655,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: 'euseFjogjVc@gHyDb@_JdAy@oM',
    distance: 0.4,
    created_at: '2018-04-09T15:46:45.427Z'
  },
  {
    creator: User.first,
    description: 'This is a 0.4 mi route that starts at 3000-3004 Sacramento St, San Francisco, CA 94115, USA',
    name: 'asdf',
    request: '{"origin":{"location":{"lat":37.78888501789661,"lng":-122.44253137054443}},"destination":{"location":{"lat":37.78983462833244,"lng":-122.43609406890869}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7888850178966,
    log: -122.442531370544,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: 'yrseFtpijVcDmg@',
    distance: 0.4,
    created_at: '2018-04-09T15:46:53.558Z'
  },
  {
    creator: User.first,
    description: 'This is a 0.9 mi route that starts at 1920-1930 Sacramento St, San Francisco, CA 94109, USA',
    name: 'sadf',
    request: '{"origin":{"location":{"lat":37.79125902110446,"lng":-122.42474296035766}},"destination":{"location":{"lat":37.796142445004485,"lng":-122.41349914016723}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7912590211045,
    log: -122.424742960358,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: '}`teFjafjVMgBoDb@_JdAmDb@OaCE_@}@oNg@uHKu@mAmRoA{R',
    distance: 0.9,
    created_at: '2018-04-09T16:40:09.704Z'
  },
  {
    creator: User.first,
    description: 'This is a 1.0 mi route that starts at 1166 Post St, San Francisco, CA 94109, USA',
    name: 'asdf',
    request: '{"origin":{"location":{"lat":37.786748349797364,"lng":-122.42107369842529}},"destination":{"location":{"lat":37.79359903533431,"lng":-122.41163232269287}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7867483497974,
    log: -122.421073698425,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: '{eseFrjejVoBmZg@iI_CV{Dd@oJjAs@HO@g@gIk@kIyAP}ATyANe@Jq@F?S[_F',
    distance: 1,
    created_at: '2018-04-09T18:42:12.236Z'
  },
  {
    creator: User.first,
    description: 'This is a 0.7 mi route that starts at 2786-2798 Jackson St, San Francisco, CA 94115, USA',
    name: 'asdf',
    request: '{"origin":{"location":{"lat":37.79169989901672,"lng":-122.44111516418457}},"destination":{"location":{"lat":37.79312425583137,"lng":-122.42918469848632}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7916998990167,
    log: -122.441115164185,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: '{dteF|gijVmHoiA',
    distance: 0.7,
    created_at: '2018-04-09T18:51:15.533Z'
  },
  {
    creator: User.first,
    description: 'This is a 0.8 mi route that starts at 2155a Jackson St, San Francisco, CA 94115, USA',
    name: 'sadff',
    request: '{"origin":{"location":{"lat":37.79292077796755,"lng":-122.43055798950195}},"destination":{"location":{"lat":37.79461640970974,"lng":-122.41691091003418}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7929207779676,
    log: -122.430557989502,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: 'emteF`fgjVgFex@cBeWO{B',
    distance: 0.8,
    created_at: '2018-04-09T18:52:41.714Z'
  },
  {
    creator: User.first,
    description: 'This is a 1.0 mi route that starts at 419-499 Hearst Ave, San Francisco, CA 94112, USA',
    name: 'uiooui',
    request: '{"origin":{"location":{"lat":37.730627640616795,"lng":-122.44827157783203}},"destination":{"location":{"lat":37.72533681498243,"lng":-122.44968919845581}},"waypoints":[{"location":{"location":{"lat":37.72200597322135,"lng":-122.44192010688477}},"stopover":true}],"travelMode":"WALKING"}',
    lat: 37.7306276406168,
    log: -122.448271577832,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: '{gheFttjjVCuW`D?bHA^?Aa@Au@@g@?kAJ}@tAkEfAcDJFZNz@h@Re@lDeItCxAjBl@rA`@~@d@xBnAlGbDfAl@@D@DgDnLcAc@c@DDbAAPED?BCHAj@?tF?bBEv@?nD@nD?`CAt@?TE@A@ADAL@j@IROLSD_A?_@K]IUE[@AIC?IDGFSQK[CAKDKJIFIMQWQMq@_@[K',
    distance: 1,
    created_at: '2018-04-09T19:25:57.679Z'
  },
  {
    creator: User.first,
    description: 'This is a 0.6 mi route that starts at 1653 Jackson St, San Francisco, CA 94109, USA',
    name: 'adas',
    request: '{"origin":{"location":{"lat":37.79393816168275,"lng":-122.42248990478515}},"destination":{"location":{"lat":37.794277286474546,"lng":-122.41261937561035}},"waypoints":[],"travelMode":"WALKING"}',
    lat: 37.7939381616828,
    log: -122.422489904785,
    elevation: nil,
    origin: 'San Francisco, CA',
    img_url: 'qsteFtsejVoBiZkBwXScDDAfD_@ImA',
    distance: 0.6,
    created_at: '2018-04-09T19:31:16.026Z'
  }]


route_seeds.each do |route|
  Route.create!(route)
end

20.times do
  Run.create!(
    user: User.first,
    route: Route.all[rand(8)],
    duration: rand(5000),
    date: "2018-4-10"
  )
end

100.times do
  Comment.create!(
    body: Faker::RickAndMorty.quote,
    user: User.all[rand(9)],
    run: Run.all[rand(19)]
  )
end

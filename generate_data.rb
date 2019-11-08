require 'securerandom'

File.open("data.csv", "w") do |f|     
  for a in 1..100000 do
  	username = SecureRandom.hex
  	password = SecureRandom.hex
  	f.write("#{username},#{password}\n")
  end
end

/* import images here */
import img01 from '../images/cars/honda1.jpg';
import img02 from '../images/cars/honda2.jpg';
import img03 from '../images/cars/mitsubishi1.jpg';
import img04 from '../images/cars/mitsubishi2.jpg';
import img05 from '../images/cars/nissan1.jpg';
import img06 from '../images/cars/nissan2.jpg';
import img07 from '../images/cars/toyota1.jpg';
import img08 from '../images/cars/toyota2.jpg';
import img09 from '../images/cars/toyota4.png';
import img08 from '../images/cars/car1.jpg';
import img08 from '../images/cars/car2.jpg';
import img08 from '../images/cars/car3.jpg';
import img08 from '../images/cars/car4.jpg';
import img08 from '../images/cars/car5.jpg';
import img08 from '../images/cars/car6.jpg';
import img08 from '../images/cars/car7.jpg';
import img08 from '../images/cars/car8.jpg';


const carList = [
    {
        id: 1,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img01,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 2,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img02,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 3,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img03,
        model: "Mdel 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 4,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img04,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 5,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img05,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 6,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img06,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 7,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img:img07,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 8,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img: img08,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 9,
        brand: "Toyota",
        rating: "",
        carName: "Toyota 01",
        img: img09,
        model: "Model 1",
        price: 100,
        speed: "20kph",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        automatic: "Manual/Automatic",
        description:
            "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor."
    },
    {
        id: 9,
        brand: "Toyota",
        rating: "4.0%",
        carName: "Toyota Fortuner",
        img:"assets/data/car1.jpg",
        model: "Model 1",
        price: 2,392,000,
        speed: "3,400 rpm - 201 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual/Automatic",
        description:
        The Toyota Fortuner is the best-selling midsize SUV in the Philippines. 
        This ladder-frame vehicle has been around since the early 2000s and has 
        since become a household name thanks to its rugged platform and tested 
        durability thanks to its robust platform and strong brand support. 
         
    },
    {
        id: 2,
        brand: "Toyota",
        rating: "3.4%",
        carName: "Toyota Avanza",
        img:"assets/data/car2.jpg",
        FuelType: Gasoline
        model: "Model 2",
        price: 1,059,000
        speed: "3,400 rpm - 201 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The Toyota Avanza is a small multi-purpose vehicle (MPV) that 
        combines practicality and cost-effectiveness in an affordable 
        package made for the Philippines.
         
    },
    {
        id: 3,
        brand: "Toyota",
        rating: "3.8%",
        carName: "Toyota Avanza",
        img:"assets/data/car3.jpg",
        FuelType: Gasoline
        model: "Model 2",
        price: 8,500,000
        speed: "3,400 rpm - 201 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The first Toyota Vios made its debut in Thailand back in late 2002. 
        It was developed as the successor of the Soluna, the Southeast 
        Asian version of the subcompact Tercel sedan which was never offered 
        in the Philippine market. 
         
    },
    {
        id: 4,
        brand: "Toyota",
        rating: "3.9%",
        carName: "Toyota Corola Altis",
        img:"assets/data/car4.jpg",
        FuelType: Gasoline
        model: "Model 2",
        price: 8,500,000
        speed: "6,400 rpm - 121 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The first Toyota Vios made its debut in Thailand back in late 2002. 
        It was developed as the successor of the Soluna, the Southeast 
        Asian version of the subcompact Tercel sedan which was never offered 
        in the Philippine market. 
         
    },
    {
        id: 5,
        brand: "Honda",
        rating: "4.0%",
        carName: "Honda HR-V",
        img:"assets/data/car5.jpg",
        FuelType: Gasoline
        model: "Model 5",
        price: 8,500,000
        speed: "6,600 rpm - 119 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The HR-V is a new-generation subcompact crossover for the local market 
        from Honda Cars Philippines, Inc. The car is designed to give drivers the 
        personal feeling of a coupe, the comfort of a sedan, and the toughness 
        and confidence of an SUV.
         
    },
    {
        id: 6,
        brand: "Honda",
        rating: "4.0%",
        carName: "Honda CRV",
        img:"assets/data/car6.jpg",
        FuelType: Gasoline
        model: "Model 6",
        price: 2,290,000
        speed: "4,000 rpm - 118 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The Honda CR-V stands for “Comfortable Runabout Vehicle.” 
        As its name implies, the compact crossover has proven itself 
        to be a worthy choice for many modern Filipino families with 
        the urban jungle being their territory.
        
    },
    {
        id: 7,
        brand: "Mitsubishi",
        rating: "4.0%",
        carName: "Mitsubishi Xpander",
        img:"assets/data/car7.jpg",
        FuelType: Gasoline
        model: "Model 7",
        price: 1,180,000
        speed: "6,000 rpm - 103 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The Mitsubishi Xpander is a seven-seater small MPV which was 
        launched by Mitsubishi Motor Philippine Corporation’s (MMPC) in 
        March 2018. Replacing the brand’s AUV, the Adventure, 
        the Xpander slots in with its dynamic shield design and car-like 
        chassis that promises better overall comfort with coil springs on 
        all four wheels while riding on a good amount of ground clearance.
        
    },
    {
        id: 8,
        brand: "Mitsubishi",
        rating: "4.0%",
        carName: "Mitsubishi Montero Sport",
        img:"assets/data/car7.jpg",
        FuelType: Gasoline
        model: "Model 7",
        price: 2,366,000
        speed: "7,000 rpm - 179 HP",
        gps:"GPS Navigation",
        seatType: "Regular Seats",
        Transmission: "Manual CVT",
        description:
        The Montero Sport, a new SUV from Mitsubishi comes in 5 variants. 
        The top variant of Montero Sport is powered by the GT 4WD AT a 2442 cc,
         4 cylinder Diesel engine that fires 179 hp of power and 430 Nm torque. 
         The 7 seater Montero Sport GT 4WD AT 8-Speed comes with Automatic 
         transmission. For added safety are provided central locking & power 
         door locks.
         
    },
];


export default carList;
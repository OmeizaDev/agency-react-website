import assets from "../assets/assets"
import Title from "./Title"
import ServiceCard from "./ServiceCard"


const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'we trun bold ideas into powerful digital solutions that Connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Advertising',
            description: 'we trun bold ideas into powerful digital solutions that Connect, engage...',
            icon: assets.marketing_icon
        },
        {
            title: 'Advertising',
            description: 'we trun bold ideas into powerful digital solutions that Connect, engage...',
            icon: assets.content_icon
        },
        {
            title: 'Advertising',
            description: 'we trun bold ideas into powerful digital solutions that Connect, engage...',
            icon: assets.social_icon
        }
        

    ]
    
  return (

    <div id="services" className="relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-grey-700 dark:text-white">
        
        <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 
        -z-1 dark:hidden" />

        <Title title='how can we help ?' desc='From strategy to execution, we craft digital solutions that move your business forward' />
        
        <div className="flex flex-col md:grid grid-cols-2">
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
        
    </div>
  )
}

export default Services
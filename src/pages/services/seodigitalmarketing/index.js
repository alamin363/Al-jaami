import SeoDigitalmarketingHeader from '@/components/SeoDogitalMarketingComponent/SeoDigitalmarketingHeder'
import SeoMainComponent from '@/components/SeoDogitalMarketingComponent/SeoMainComponent'
import useTitle from '@/components/hooks/useTitle';
import ContactUs from '@/components/servicesComponent/ContactUs'

const SeoDigitalmarketing = () => {
  useTitle("Seo & Digital Marketing");
  return (
    <>
      <SeoDigitalmarketingHeader />
      <SeoMainComponent />
      <ContactUs />
    </>
  )
}

export default SeoDigitalmarketing
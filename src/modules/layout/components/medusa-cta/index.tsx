import { Text } from "@medusajs/ui"
import NextJs from "../../../common/icons/nextjs"
import Image from "next/image" // Make sure to import Next.js Image component

const CertificationCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Certified and Insured by
      <a href="https://tica.org" target="_blank" rel="noreferrer">
        {/* Using the PNG image */}
        <Image 
          src="/images/tica.png" 
          alt="The International Cat Association" 
          width={80} // Adjust based on your needs
          height={30} // Adjust based on your needs
          className="h-[30px] w-auto" // Adjust styling as needed
        />
      </a>
      
      <a href="https://www.akc.org/" target="_blank" rel="noreferrer">
        {/* Using the PNG image */}
        <Image 
          src="/images/akc.jpeg" 
          alt="American Kennel Club" 
          width={80} // Adjust based on your needs
          height={30} // Adjust based on your needs
          className="h-[30px] w-auto" // Adjust styling as needed
        />
      </a>
    </Text>
  )
}

export default CertificationCTA
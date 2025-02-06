import Image from "next/image"

const StudioLondon = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white">
            {/* Left Content */}
            <div className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 flex flex-col justify-center">
                <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
                    From a studio in London to a global brand with over 400 outlets
                </h2>
                <p className="text-base text-neutral-600 mb-6">
                    When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                </p>
                <p className="text-base text-neutral-600 mb-12">
                    Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                </p>
                <button className="text-neutral-600 hover:text-black border border-neutral-600 px-8 py-4 w-fit">
                    Get in touch
                </button>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[6/5]">
                <Image
                    src="/Image.png"
                    alt="Studio showcase"
                    fill
                    className="object-cover"
                />
            </div>
        </div>

    )
}

export default StudioLondon
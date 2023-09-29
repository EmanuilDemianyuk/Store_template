import { Carousel } from "@material-tailwind/react";
import Customer from '../Customer';
import avatarone from '../../assets/img/customer-1.jpeg';
import avatartwo from '../../assets/img/customer-2.jpeg';
import avatarthree from '../../assets/img/customer-3.jpeg';
import avatarfour from '../../assets/img/customer-4.jpeg';
 
export function CarouselCustom() {
  return (
    <Carousel
      className="rounded-none"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-green-700" : "w-4 bg-green-200"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Customer fullName='Andrew Watson' rate={5} date='Jun 25, 2023' imageSrc={avatarone} />
      <Customer fullName='Emilia Brown' rate={5} date='Aug 02, 2023' imageSrc={avatartwo} />
      <Customer fullName='Tony Wang' rate={5} date='Feb 10, 2023' imageSrc={avatarthree} />
      <Customer fullName='Lisa Larson' rate={5} date='Dec 18, 2022' imageSrc={avatarfour} />
    </Carousel>
  );
}
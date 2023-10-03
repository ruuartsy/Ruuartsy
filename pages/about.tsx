import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Skills from "@/components/Skills";
import Banner from "./assest/banner.jpg"
export default function about() {
  return (
    <>
      <Head>
        <title>Ruu artisy | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={Banner}
            width={500}
            height={500}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
             Photographer, based on Colombo
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              {" "}
              In photography, there is a reality so subtle that it becomes more real than reality.
              In my first year as a photographer, I thought the photos I took needed more spark.
               So I enrolled in a graphic design class. 
              I combined my photographs with visual arts and finally saw what I was looking for. The spark!
Check out my portfolio and see how I transform normal photos into enchanting ones!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
            
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

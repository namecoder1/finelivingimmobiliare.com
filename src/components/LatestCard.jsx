export default function LatestCard({
  title,
  image,
  description,
  slug,
  code,
  baths,
  rooms,
  area,
  selling,
  sellPrice,
  renting,
  rentPrice,
}) {
  return (
    <>
      <a href={'/immobili/' + slug} className="flex flex-col shadow-2xl w-[350px]">
        <img
          src={image}
          alt={`Immagine di ${title}`}
          className="max-w-full h-60"
        />
        <div className="flex flex-col items-start justify-start mt-3 mx-3">
          <h1 className="font-semibold text-lg">{title}</h1>
          <h2 className="">{description}</h2>
          <div className="flex flex-col w-full mt-5 mb-1">
            <div className="flex items-center justify-between">
              <p className="text-sm">Cod. Agenzia: {code}</p>
              <p className="text-secondary/90 text-lg">
                {renting ? (
                  <span>€ {rentPrice} / Mese</span>
                ) : (!renting && !selling) ? (
                  <span>Su Contatto</span>
                ) : !renting ? (
                  <span>€ {sellPrice}</span>
                ) : (<span>Da definire</span>)
              }
              </p>
            </div>
            <div className="divider my-1" />
            <div>
              <ul className="flex items-center justify-between mb-2 mx-4 font-semibold">
                <li className="flex gap-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <>
                        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M7 6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v5H4a2 2 0 0 0-2 2v1a5.994 5.994 0 0 0 2.625 4.961l-.332.332a1 1 0 1 0 1.414 1.414l.876-.875c.454.11.929.168 1.417.168h8c.488 0 .963-.058 1.417-.168l.876.875a1 1 0 0 0 1.414-1.414l-.332-.332A5.994 5.994 0 0 0 22 14v-1a2 2 0 0 0-2-2H7zm-3 7h16v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
                        />
                      </>
                    </g>
                  </svg>
                  {baths}
                </li>
                <li className="flex gap-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
                    />
                  </svg>
                  {rooms}
                </li>
                <li className="flex gap-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M11 16v-5H3m18-3h-6v2m0 8v3m-4-2v2m0-18v3m10 9h-6v-2m-4-4v2" />
                      <path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6" />
                    </g>
                  </svg>
                  {area}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

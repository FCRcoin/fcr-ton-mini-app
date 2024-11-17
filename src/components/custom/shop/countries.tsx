import Image from 'next/image';
import { Button } from '../../ui/button';

interface Country {
  code: string;
  name: string;
  flag: string;
}

export default function CountryGroup() {
  const countries: Country[] = [
    {
      code: 'IDN',
      name: 'Indonesia',
      flag: '/assets/countries/id.svg',
    },
    {
      code: 'MY',
      name: 'Malaysia',
      flag: '/assets/countries/my.svg',
    },
    {
      code: 'VN',
      name: 'Vietnam',
      flag: '/assets/countries/vn.svg',
    },
    {
      code: 'PHL',
      name: 'Philippines',
      flag: '/assets/countries/ph.svg',
    },
    {
      code: 'CHN',
      name: 'China',
      flag: '/assets/countries/cn.svg',
    },
    {
      code: 'SG',
      name: 'Singapore',
      flag: '/assets/countries/sg.svg',
    },
    {
      code: 'KH',
      name: 'Cambodia',
      flag: '/assets/countries/kh.svg',
    },
    {
      code: 'TH',
      name: 'Thailand',
      flag: '/assets/countries/th.svg',
    },
    {
      code: 'LA',
      name: 'Laos',
      flag: '/assets/countries/la.svg',
    },
    {
      code: 'MM',
      name: 'Myanmar',
      flag: '/assets/countries/mm.svg',
    },
  ];

  return (
    <div className="flex items-center gap-4 p-4 overflow-x-auto  min-h-[120px] justify-center">
      {countries.map((country) => (
        <Button
          key={country.code}
          variant="ghost"
          className="flex flex-col items-center gap-2 p-0 h-auto hover:bg-transparent"
        >
          <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-gray-600 p-0.5">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-xs font-medium text-gray-400">
            {country.code}
          </span>
        </Button>
      ))}
    </div>
  );
}

export default function LogoSVG({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
      <rect width='1024' height='1024' rx='220' ry='220' fill='#4F46E5' />
      <ellipse cx='180' cy='160' rx='320' ry='280' fill='#6366F1' opacity='.35' />
      <ellipse cx='512' cy='810' rx='360' ry='22' fill='#312E81' opacity='.7' />
      <rect x='132' y='530' width='760' height='165' rx='32' fill='#fff' />
      <path d='M275,530Q292,405 375,372L649,372Q732,405 749,530Z' fill='#fff' />
      <path d='M530,520L540,382L643,382Q712,408 726,520Z' fill='#818CF8' />
      <path d='M494,520L484,382L381,382Q312,408 298,520Z' fill='#818CF8' />
      <rect x='503' y='380' width='18' height='140' rx='4' fill='#6366F1' />
      <circle cx='278' cy='700' r='84' fill='#4F46E5' />
      <circle cx='746' cy='700' r='84' fill='#4F46E5' />
      <circle cx='278' cy='700' r='82' fill='#1E1B4B' />
      <circle cx='278' cy='700' r='58' fill='#C7D2FE' />
      <circle cx='278' cy='700' r='36' fill='#1E1B4B' />
      <circle cx='278' cy='700' r='16' fill='#E0E7FF' />
      <circle cx='746' cy='700' r='82' fill='#1E1B4B' />
      <circle cx='746' cy='700' r='58' fill='#C7D2FE' />
      <circle cx='746' cy='700' r='36' fill='#1E1B4B' />
      <circle cx='746' cy='700' r='16' fill='#E0E7FF' />
      <rect x='854' y='575' width='38' height='20' rx='8' fill='#E0E7FF' />
      <rect x='854' y='601' width='38' height='13' rx='5' fill='#FCD34D' />
      <rect x='132' y='575' width='38' height='20' rx='8' fill='#FCA5A5' />
      <rect x='132' y='601' width='38' height='13' rx='5' fill='#EF4444' />
      <rect x='628' y='346' width='5' height='32' rx='2.5' fill='#C7D2FE' opacity='.7' />
      <circle cx='630' cy='344' r='5' fill='#E0E7FF' opacity='.8' />
    </svg>
  )
}

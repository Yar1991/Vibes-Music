import uuid from 'react-uuid'

const getId = ()=>{
  return uuid()
}

const data = [
  {
    id: getId(),
    title: 'Dawn',
    artist: 'Toonorth',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=17941',
    colors: ['#9c9ffc', '#464d62']
  },
  {
    id: getId(),
    title: 'Higher',
    artist: 'Misha, Jussi Halme',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=15088',
    colors: ['#e26e6e', '#2f395c']
  },
  {
    id: getId(),
    title: 'New Moon',
    artist: 'Toonorth',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=17931',
    colors: ['#9c9ffc', '#464d62']
  },
  {
    id: getId(),
    title: 'Got it',
    artist: 'Misha, Jussi Halme',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=15041',
    colors: ['#e26e6e', '#2f395c']

  },
  {
    id: getId(),
    title: 'Cruising',
    artist: 'Evil Needle',
    img: 'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=17087',
    colors: ['#e89c55', '#ec4849']

  },
  {
    id: getId(),
    title: 'By Chance',
    artist: 'SwuM',
    img: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=15224',
    colors: ['#8d4828', '#293535']

  },
  {
    id: getId(),
    title: 'Low Rider',
    artist: 'Evil Needle',
    img: 'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=17090',
    colors: ['#e89c55', '#ec4849']

  },
  {
    id: getId(),
    title: 'Skates',
    artist: 'SwuM',
    img: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=15226',
    colors: ['#8d4828', '#293535']
  },
  {
    id: getId(),
    title: 'Roses n Flames',
    artist: 'C Y G N',
    img: 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=14985',
    colors: ['#dc8ada', '#7295cd']

  },
  {
    id: getId(),
    title: 'Golden',
    artist: 'Aarigod',
    img: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=13005',
    colors: ['#c0d87a', '#a07a40']

  },
  {
    id: getId(),
    title: 'Lonely Waves',
    artist: 'C Y G N',
    img: 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=14981',
    colors: ['#dc8ada', '#7295cd']

  },
  {
    id: getId(),
    title: 'Viatecture',
    artist: 'Leavv, Makzo',
    img: 'https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=20119',
    colors: ['#a1c24f', '#ebbfb6']
    
  },
  {
    id: getId(),
    title: 'Evenfall',
    artist: 'Aarigod',
    img: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=13007',
    colors: ['#c0d87a', '#a07a40']
    
  },
  {
    id: getId(),
    title: 'Safe Haven',
    artist: 'Oatmello, Makzo',
    img: 'https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=20123',
    colors: ['#a1c24f', '#ebbfb6']
    
  },
  {
    id: getId(),
    title: 'Travelbag',
    artist: 'mommy, Sleepy Fish',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
    colors: ['#5b8ecf', '#f7d8c6']
    
  },
  {
    id: getId(),
    title: 'Flashback',
    artist: 'Blue Wednesday, Shopan',
    img: 'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=11225',
    colors: ['#dea5ce', '#38407f']
    
  },
  {
    id: getId(),
    title: 'Railway Pulse',
    artist: 'mommy, Sleepy Fish',
    img: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=19060',
    colors: ['#5b8ecf', '#f7d8c6']
    
  },
]

export default data;
const categories = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

const filters = {
  order: ["popular", "latest"],
  orientation: ["vertical", "horizontal"],
  type: ["photo", "illustration", "vector"],
  colors: [
    "red",
    "orange",
    "yellow",
    "green",
    "turquoise",
    "blue",
    "pink",
    "gray",
    "black",
    "brown",
    "white",
  ],
};

const blogData = [
  {
    id: 1,
    title: "Elon Musk is nuild the biggest cooling system in the world",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi purus, tincidunt ac commodo at, sodales consectetur libero. Sed egestas nisi mauris. Quisque convallis justo eu odio scelerisque fringilla. Praesent nibh leo, luctus in efficitur in, cursus ac ipsum. Aliquam posuere tellus ut efficitur placerat. Donec vitae mi vel risus cursus varius. Aenean euismod libero quis dolor fringilla, a placerat nisl porttitor. Nulla hendrerit non mi eget molestie. Nunc ac felis dolor. Fusce posuere pulvinar elementum. Aliquam iaculis, ipsum vel laoreet dictum, nunc sem sodales arcu, hendrerit dictum orci ante sed felis. Pellentesque et fermentum dui. Vestibulum rhoncus lorem sed enim iaculis fringilla. Nulla a nulla justo. Fusce sed volutpat ligula, sed interdum nibh. Curabitur tortor lacus, aliquet dapibus dui vitae, eleifend molestie turpis. Ut imperdiet, quam nec sollicitudin interdum, libero est dignissim justo, eu rutrum eros orci sit amet magna. Nulla facilisi. Suspendisse sed magna condimentum, suscipit augue ut, sagittis diam.Fusce fermentum tellus eu lectus mollis, eget fringilla lacus tincidunt. Nunc et ante eget magna eleifend elementum et vitae tortor. Maecenas lobortis commodo mauris, sit amet iaculis mauris facilisis eget. Phasellus turpis arcu, auctor in nulla et, pretium iaculis nunc. Mauris at libero eget nisi efficitur convallis ut at orci. Mauris ac sem tortor. Morbi sollicitudin convallis justo eu maximus. Aliquam varius nunc quis metus malesuada convallis. Suspendisse tincidunt maximus justo non malesuada. Nunc iaculis diam ut facilisis ultricies.Curabitur sollicitudin auctor finibus. Nulla eget sem egestas odio consectetur suscipit ut quis diam. Nam vestibulum maximus sem sit amet tempus. Donec purus enim, scelerisque a erat ullamcorper, rutrum sollicitudin mi. Fusce neque erat, mollis vel urna id, aliquet bibendum mi. Phasellus dignissim nisl eros, ut placerat odio lobortis lobortis. Nunc aliquet pharetra erat ut elementum. Nulla facilisi. Morbi nec lacus faucibus, porta lacus eu, varius risus. Nulla ex metus, sagittis a ex luctus, egestas scelerisque enim. Vivamus lectus orci, congue et scelerisque non, aliquet at tellus.In eu lacus scelerisque libero rhoncus tincidunt. Cras a blandit leo, nec accumsan mauris. Donec dapibus ante ac justo lacinia, quis fringilla mi mattis. Nam commodo metus eu lectus aliquet, et sollicitudin eros luctus. Mauris ligula arcu, elementum eget purus nec, maximus consequat est. Phasellus ac diam turpis. Nullam nec blandit dolor. Curabitur rhoncus nibh vel dolor lacinia, id tristique risus faucibus. Morbi ornare ligula eget lectus lacinia viverra. Curabitur imperdiet, ante vitae dignissim porta, ante lectus tempus augue, id porttitor augue nulla eu nunc. Mauris vitae dolor vulputate, scelerisque lorem quis, fringilla purus. Mauris maximus enim nibh, a volutpat nunc eleifend sit amet. Suspendisse at convallis risus. Sed vulputate efficitur neque at scelerisque. Aliquam erat volutpat.",
    date: "2024-06-21",
    imageUrl: "../assets/images/newspapers-4565916_1920.jpg",
    author: "Pelumi Isola",
    category: "Tech",
  },
  {
    id: 2,
    title: "Elon Musk is nuild the biggest cooling system in the world",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi purus, tincidunt ac commodo at, sodales consectetur libero. Sed egestas nisi mauris. Quisque convallis justo eu odio scelerisque fringilla. Praesent nibh leo, luctus in efficitur in, cursus ac ipsum. Aliquam posuere tellus ut efficitur placerat. Donec vitae mi vel risus cursus varius. Aenean euismod libero quis dolor fringilla, a placerat nisl porttitor. Nulla hendrerit non mi eget molestie. Nunc ac felis dolor. Fusce posuere pulvinar elementum. Aliquam iaculis, ipsum vel laoreet dictum, nunc sem sodales arcu, hendrerit dictum orci ante sed felis. Pellentesque et fermentum dui. Vestibulum rhoncus lorem sed enim iaculis fringilla. Nulla a nulla justo. Fusce sed volutpat ligula, sed interdum nibh. Curabitur tortor lacus, aliquet dapibus dui vitae, eleifend molestie turpis. Ut imperdiet, quam nec sollicitudin interdum, libero est dignissim justo, eu rutrum eros orci sit amet magna. Nulla facilisi. Suspendisse sed magna condimentum, suscipit augue ut, sagittis diam.Fusce fermentum tellus eu lectus mollis, eget fringilla lacus tincidunt. Nunc et ante eget magna eleifend elementum et vitae tortor. Maecenas lobortis commodo mauris, sit amet iaculis mauris facilisis eget. Phasellus turpis arcu, auctor in nulla et, pretium iaculis nunc. Mauris at libero eget nisi efficitur convallis ut at orci. Mauris ac sem tortor. Morbi sollicitudin convallis justo eu maximus. Aliquam varius nunc quis metus malesuada convallis. Suspendisse tincidunt maximus justo non malesuada. Nunc iaculis diam ut facilisis ultricies.Curabitur sollicitudin auctor finibus. Nulla eget sem egestas odio consectetur suscipit ut quis diam. Nam vestibulum maximus sem sit amet tempus. Donec purus enim, scelerisque a erat ullamcorper, rutrum sollicitudin mi. Fusce neque erat, mollis vel urna id, aliquet bibendum mi. Phasellus dignissim nisl eros, ut placerat odio lobortis lobortis. Nunc aliquet pharetra erat ut elementum. Nulla facilisi. Morbi nec lacus faucibus, porta lacus eu, varius risus. Nulla ex metus, sagittis a ex luctus, egestas scelerisque enim. Vivamus lectus orci, congue et scelerisque non, aliquet at tellus.In eu lacus scelerisque libero rhoncus tincidunt. Cras a blandit leo, nec accumsan mauris. Donec dapibus ante ac justo lacinia, quis fringilla mi mattis. Nam commodo metus eu lectus aliquet, et sollicitudin eros luctus. Mauris ligula arcu, elementum eget purus nec, maximus consequat est. Phasellus ac diam turpis. Nullam nec blandit dolor. Curabitur rhoncus nibh vel dolor lacinia, id tristique risus faucibus. Morbi ornare ligula eget lectus lacinia viverra. Curabitur imperdiet, ante vitae dignissim porta, ante lectus tempus augue, id porttitor augue nulla eu nunc. Mauris vitae dolor vulputate, scelerisque lorem quis, fringilla purus. Mauris maximus enim nibh, a volutpat nunc eleifend sit amet. Suspendisse at convallis risus. Sed vulputate efficitur neque at scelerisque. Aliquam erat volutpat.",
    date: "2024-06-21",
    imageUrl: "../assets/images/newspapers-4565916_1920.jpg",
    author: "Pelumi Isola",
    category: "Tech",
  },
  {
    id: 3,
    title: "Elon Musk is nuild the biggest cooling system in the world",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi purus, tincidunt ac commodo at, sodales consectetur libero. Sed egestas nisi mauris. Quisque convallis justo eu odio scelerisque fringilla. Praesent nibh leo, luctus in efficitur in, cursus ac ipsum. Aliquam posuere tellus ut efficitur placerat. Donec vitae mi vel risus cursus varius. Aenean euismod libero quis dolor fringilla, a placerat nisl porttitor. Nulla hendrerit non mi eget molestie. Nunc ac felis dolor. Fusce posuere pulvinar elementum. Aliquam iaculis, ipsum vel laoreet dictum, nunc sem sodales arcu, hendrerit dictum orci ante sed felis. Pellentesque et fermentum dui. Vestibulum rhoncus lorem sed enim iaculis fringilla. Nulla a nulla justo. Fusce sed volutpat ligula, sed interdum nibh. Curabitur tortor lacus, aliquet dapibus dui vitae, eleifend molestie turpis. Ut imperdiet, quam nec sollicitudin interdum, libero est dignissim justo, eu rutrum eros orci sit amet magna. Nulla facilisi. Suspendisse sed magna condimentum, suscipit augue ut, sagittis diam.Fusce fermentum tellus eu lectus mollis, eget fringilla lacus tincidunt. Nunc et ante eget magna eleifend elementum et vitae tortor. Maecenas lobortis commodo mauris, sit amet iaculis mauris facilisis eget. Phasellus turpis arcu, auctor in nulla et, pretium iaculis nunc. Mauris at libero eget nisi efficitur convallis ut at orci. Mauris ac sem tortor. Morbi sollicitudin convallis justo eu maximus. Aliquam varius nunc quis metus malesuada convallis. Suspendisse tincidunt maximus justo non malesuada. Nunc iaculis diam ut facilisis ultricies.Curabitur sollicitudin auctor finibus. Nulla eget sem egestas odio consectetur suscipit ut quis diam. Nam vestibulum maximus sem sit amet tempus. Donec purus enim, scelerisque a erat ullamcorper, rutrum sollicitudin mi. Fusce neque erat, mollis vel urna id, aliquet bibendum mi. Phasellus dignissim nisl eros, ut placerat odio lobortis lobortis. Nunc aliquet pharetra erat ut elementum. Nulla facilisi. Morbi nec lacus faucibus, porta lacus eu, varius risus. Nulla ex metus, sagittis a ex luctus, egestas scelerisque enim. Vivamus lectus orci, congue et scelerisque non, aliquet at tellus.In eu lacus scelerisque libero rhoncus tincidunt. Cras a blandit leo, nec accumsan mauris. Donec dapibus ante ac justo lacinia, quis fringilla mi mattis. Nam commodo metus eu lectus aliquet, et sollicitudin eros luctus. Mauris ligula arcu, elementum eget purus nec, maximus consequat est. Phasellus ac diam turpis. Nullam nec blandit dolor. Curabitur rhoncus nibh vel dolor lacinia, id tristique risus faucibus. Morbi ornare ligula eget lectus lacinia viverra. Curabitur imperdiet, ante vitae dignissim porta, ante lectus tempus augue, id porttitor augue nulla eu nunc. Mauris vitae dolor vulputate, scelerisque lorem quis, fringilla purus. Mauris maximus enim nibh, a volutpat nunc eleifend sit amet. Suspendisse at convallis risus. Sed vulputate efficitur neque at scelerisque. Aliquam erat volutpat.",
    date: "2024-06-21",
    imageUrl: "../assets/images/newspapers-4565916_1920.jpg",
    author: "Pelumi Isola",
    category: "Tech",
  },
  {
    id: 4,
    title: "Elon Musk is nuild the biggest cooling system in the world",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi purus, tincidunt ac commodo at, sodales consectetur libero. Sed egestas nisi mauris. Quisque convallis justo eu odio scelerisque fringilla. Praesent nibh leo, luctus in efficitur in, cursus ac ipsum. Aliquam posuere tellus ut efficitur placerat. Donec vitae mi vel risus cursus varius. Aenean euismod libero quis dolor fringilla, a placerat nisl porttitor. Nulla hendrerit non mi eget molestie. Nunc ac felis dolor. Fusce posuere pulvinar elementum. Aliquam iaculis, ipsum vel laoreet dictum, nunc sem sodales arcu, hendrerit dictum orci ante sed felis. Pellentesque et fermentum dui. Vestibulum rhoncus lorem sed enim iaculis fringilla. Nulla a nulla justo. Fusce sed volutpat ligula, sed interdum nibh. Curabitur tortor lacus, aliquet dapibus dui vitae, eleifend molestie turpis. Ut imperdiet, quam nec sollicitudin interdum, libero est dignissim justo, eu rutrum eros orci sit amet magna. Nulla facilisi. Suspendisse sed magna condimentum, suscipit augue ut, sagittis diam.Fusce fermentum tellus eu lectus mollis, eget fringilla lacus tincidunt. Nunc et ante eget magna eleifend elementum et vitae tortor. Maecenas lobortis commodo mauris, sit amet iaculis mauris facilisis eget. Phasellus turpis arcu, auctor in nulla et, pretium iaculis nunc. Mauris at libero eget nisi efficitur convallis ut at orci. Mauris ac sem tortor. Morbi sollicitudin convallis justo eu maximus. Aliquam varius nunc quis metus malesuada convallis. Suspendisse tincidunt maximus justo non malesuada. Nunc iaculis diam ut facilisis ultricies.Curabitur sollicitudin auctor finibus. Nulla eget sem egestas odio consectetur suscipit ut quis diam. Nam vestibulum maximus sem sit amet tempus. Donec purus enim, scelerisque a erat ullamcorper, rutrum sollicitudin mi. Fusce neque erat, mollis vel urna id, aliquet bibendum mi. Phasellus dignissim nisl eros, ut placerat odio lobortis lobortis. Nunc aliquet pharetra erat ut elementum. Nulla facilisi. Morbi nec lacus faucibus, porta lacus eu, varius risus. Nulla ex metus, sagittis a ex luctus, egestas scelerisque enim. Vivamus lectus orci, congue et scelerisque non, aliquet at tellus.In eu lacus scelerisque libero rhoncus tincidunt. Cras a blandit leo, nec accumsan mauris. Donec dapibus ante ac justo lacinia, quis fringilla mi mattis. Nam commodo metus eu lectus aliquet, et sollicitudin eros luctus. Mauris ligula arcu, elementum eget purus nec, maximus consequat est. Phasellus ac diam turpis. Nullam nec blandit dolor. Curabitur rhoncus nibh vel dolor lacinia, id tristique risus faucibus. Morbi ornare ligula eget lectus lacinia viverra. Curabitur imperdiet, ante vitae dignissim porta, ante lectus tempus augue, id porttitor augue nulla eu nunc. Mauris vitae dolor vulputate, scelerisque lorem quis, fringilla purus. Mauris maximus enim nibh, a volutpat nunc eleifend sit amet. Suspendisse at convallis risus. Sed vulputate efficitur neque at scelerisque. Aliquam erat volutpat.",
    date: "2024-06-21",
    imageUrl: "../assets/images/newspapers-4565916_1920.jpg",
    author: "Pelumi Isola",
    category: "Tech",
  },
  {
    id: 5,
    title: "Elon Musk is nuild the biggest cooling system in the world",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi purus, tincidunt ac commodo at, sodales consectetur libero. Sed egestas nisi mauris. Quisque convallis justo eu odio scelerisque fringilla. Praesent nibh leo, luctus in efficitur in, cursus ac ipsum. Aliquam posuere tellus ut efficitur placerat. Donec vitae mi vel risus cursus varius. Aenean euismod libero quis dolor fringilla, a placerat nisl porttitor. Nulla hendrerit non mi eget molestie. Nunc ac felis dolor. Fusce posuere pulvinar elementum. Aliquam iaculis, ipsum vel laoreet dictum, nunc sem sodales arcu, hendrerit dictum orci ante sed felis. Pellentesque et fermentum dui. Vestibulum rhoncus lorem sed enim iaculis fringilla. Nulla a nulla justo. Fusce sed volutpat ligula, sed interdum nibh. Curabitur tortor lacus, aliquet dapibus dui vitae, eleifend molestie turpis. Ut imperdiet, quam nec sollicitudin interdum, libero est dignissim justo, eu rutrum eros orci sit amet magna. Nulla facilisi. Suspendisse sed magna condimentum, suscipit augue ut, sagittis diam.Fusce fermentum tellus eu lectus mollis, eget fringilla lacus tincidunt. Nunc et ante eget magna eleifend elementum et vitae tortor. Maecenas lobortis commodo mauris, sit amet iaculis mauris facilisis eget. Phasellus turpis arcu, auctor in nulla et, pretium iaculis nunc. Mauris at libero eget nisi efficitur convallis ut at orci. Mauris ac sem tortor. Morbi sollicitudin convallis justo eu maximus. Aliquam varius nunc quis metus malesuada convallis. Suspendisse tincidunt maximus justo non malesuada. Nunc iaculis diam ut facilisis ultricies.Curabitur sollicitudin auctor finibus. Nulla eget sem egestas odio consectetur suscipit ut quis diam. Nam vestibulum maximus sem sit amet tempus. Donec purus enim, scelerisque a erat ullamcorper, rutrum sollicitudin mi. Fusce neque erat, mollis vel urna id, aliquet bibendum mi. Phasellus dignissim nisl eros, ut placerat odio lobortis lobortis. Nunc aliquet pharetra erat ut elementum. Nulla facilisi. Morbi nec lacus faucibus, porta lacus eu, varius risus. Nulla ex metus, sagittis a ex luctus, egestas scelerisque enim. Vivamus lectus orci, congue et scelerisque non, aliquet at tellus.In eu lacus scelerisque libero rhoncus tincidunt. Cras a blandit leo, nec accumsan mauris. Donec dapibus ante ac justo lacinia, quis fringilla mi mattis. Nam commodo metus eu lectus aliquet, et sollicitudin eros luctus. Mauris ligula arcu, elementum eget purus nec, maximus consequat est. Phasellus ac diam turpis. Nullam nec blandit dolor. Curabitur rhoncus nibh vel dolor lacinia, id tristique risus faucibus. Morbi ornare ligula eget lectus lacinia viverra. Curabitur imperdiet, ante vitae dignissim porta, ante lectus tempus augue, id porttitor augue nulla eu nunc. Mauris vitae dolor vulputate, scelerisque lorem quis, fringilla purus. Mauris maximus enim nibh, a volutpat nunc eleifend sit amet. Suspendisse at convallis risus. Sed vulputate efficitur neque at scelerisque. Aliquam erat volutpat.",
    date: "2024-06-21",
    imageUrl: "../assets/images/newspapers-4565916_1920.jpg",
    author: "Pelumi Isola",
    category: "Tech",
  },
];


export const data = {
  categories,
  filters,
  blogData
};

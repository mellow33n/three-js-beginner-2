import { useRef } from "react";
import UpButton from "./upButton";

export default function Header({ elementsLenght }) {
  const navbarRef = useRef(null);
  

  const elementsLenghtArray = Array.from(
    new Array(elementsLenght),
    (_, index) => index
  );

  return (
    <>
      <header className="header">
        <nav className="navbar" ref={navbarRef}>
          {elementsLenghtArray.map((index) => {
            return (
              <div className="navbar-item" key={Math.random()}>
                <a href={"#canvas-index-" + index}>
                  {"Go to  section № " + (index+1)}
                </a>
              </div>
            );
          })}
        </nav>
        <h1 className="title-header">
          Hello! This is my test task for Three js beginners. I hope you enjoy
          to see it. <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Long title: <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta
          quisquam nam ut unde nihil, in deleniti exercitationem iusto amet
          dolorum provident quae itaque rerum totam laudantium voluptatibus qui
          at. Modi vero excepturi culpa totam impedit ipsa, illo voluptate ad
          harum dolorum ipsam ducimus omnis atque, adipisci vel minus? Debitis
          laudantium nobis corporis totam error! Illum aliquam quidem numquam
          impedit. Mollitia accusamus tenetur vero non error est! Omnis
          consequuntur, ea et repellendus optio tempora. Dolorem, quibusdam
          nulla. Itaque deleniti, ducimus, officiis saepe ipsam eveniet quae ut
          sapiente reprehenderit provident sint!
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          perferendis provident nesciunt, cum blanditiis nostrum facilis fugit
          in aliquid similique perspiciatis consequatur delectus? Doloribus
          labore itaque impedit in ratione aperiam? Architecto eum expedita
          commodi, rerum nihil culpa minima nostrum iusto, eveniet dolorem
          praesentium asperiores perferendis ad? Unde aliquid quidem incidunt
          sequi eius! Illo inventore rem libero necessitatibus error quidem
          nemo! Ipsa porro iusto enim dolore sequi inventore optio eum, aut fuga
          expedita id aperiam iste suscipit animi explicabo magni eveniet
          recusandae, illum alias. Odit, non id voluptas assumenda minus amet.
          Ad minima accusamus magnam asperiores inventore est aliquam autem
          distinctio excepturi ducimus sapiente porro consectetur et dolorem
          nihil delectus voluptatibus rerum, eligendi vel veritatis dolor
          quibusdam ipsa sit. Quaerat, debitis! Dicta dolores nisi iure expedita
          sit totam qui? Libero non itaque repellat ad. Corporis illo dolor
          minima. Harum, maiores corrupti eaque, debitis nisi minima quam, nobis
          doloribus natus tempore voluptatum! Temporibus quo earum nulla
          blanditiis assumenda reprehenderit pariatur officia, dicta harum quam
          distinctio incidunt, officiis quae, nemo numquam accusantium possimus!
          Fuga atque ipsa nisi iste id illo laborum animi sed. Ad, nam expedita,
          accusamus, ratione illum sunt aliquam saepe qui eaque perferendis odio
          similique vero quisquam laboriosam autem temporibus sint eius incidunt
          magnam officiis voluptatum nemo exercitationem quasi. Commodi,
          delectus.
        </h1>
      </header>
      <UpButton navbarRef={navbarRef}></UpButton>
      
    </>
  );
}

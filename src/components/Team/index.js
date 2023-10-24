import Collaborator from "../Collaborator";
import "./Team.css";

function Team({ secondaryColor, primaryColor, name, collaborators }) {
  const sectionCss = { backgroundColor: secondaryColor };
  const h3Css = { borderColor: primaryColor };
  console.log({ collaborators });
  return (
    collaborators.length > 0 && <section className="team" style={sectionCss}>
      <h3 style={h3Css}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator
            collaboratorColor={primaryColor}
            key={collaborator.nome}
            name={collaborator.nome}
            cargo={collaborator.cargo}
            imagem={collaborator.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;

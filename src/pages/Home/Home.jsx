import imgLogo from "../../assets/BookTech/05 - LogoNome.png";

export function Home() {
  return (
    <div className="d-flex align-items-center">
      <div className="col-md-2 m-2 p-2 mx-auto text-center">
        <img src={imgLogo} alt="Imagem da biblioteca" className="img-fluid"/>
        <h3 className="col-md-0 text-center m">Bem-vindo!</h3>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/projeto imagens/bg-footer.webp')" }}
    >
      <div className="conteudofooter flex justify-between">
        <div className="titulofooter px-[8vw] py-[8vw]">
          <h3 className="font-light tracking-[12px] text-[25px] text-white">
            THE EXPERIENCE
          </h3>
          <h1 className="text-[4vw] max-w-[20vw] font-['Banguiat'] text-white">
            STRANGER THINGS
          </h1>
        </div>

        <div className="flex gap-[2vw] px-[8vw] py-[8vw]">
          <div className="redes">
            <h3 className="font-normal pb-[10px] text-white">REDES SOCIAIS</h3>
            <img src="/projeto imagens/footer-facebook.svg" alt="facebook" />
            <img src="/projeto imagens/footer-instagram.svg" alt="instagram" />
            <img src="/projeto imagens/footer-twitter.svg" alt="twitter" />
          </div>

          <div className="parc">
            <h3 className="font-normal pb-[10px] text-white">
              PARCEIRO DE MÍDIA
            </h3>
            <img src="/projeto imagens/footer-parceiro.svg" alt="parceiro" />
          </div>

          <div className="inst">
            <h3 className="font-normal pb-[10px] text-white">INSTITUCIONAL</h3>
            <ul className="flex flex-col gap-1">
              {["Contato", "Imprensa", "Parcerias", "Influenciadores"].map(
                (item) => (
                  <li key={item} className="list-none text-white">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[4vw]">
        <img src="/projeto imagens/netflix-logo.svg" alt="netflix" />
        <img src="/projeto imagens/fever-logo.svg" alt="fever" />
      </div>

      <div className="flex gap-[7vw] w-max overflow-hidden">
        {["THE EXPERIENCE", "THE EXPERIENCE", "THE EXPERIENCE"].map(
          (text, i) => (
            <h3
              key={i}
              className="
              font-['Banguiat'] text-[12vw]
              text-[#8d8d8d] mix-blend-color-dodge
              animate-[textoinfinito_8s_infinite_linear]
            "
            >
              {text}
            </h3>
          ),
        )}
      </div>
    </footer>
  );
}

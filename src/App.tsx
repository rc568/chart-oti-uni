import { Chart } from "./components/Chart";

export function App() {

  return (
    <>
      <div className="flex">
        <aside className="w-20 h-screen bg-[#081A51]">
        </aside>
        <main className="w-full px-12 py-6 bg-colorBG">
          <h1 className="font-semibold text-3xl">
            Calidad del aire cerca de OTI, UNI
          </h1>
          <section>
            <h2 className="uppercase text-primary font-semibold text-xl">
              Recomendaciones de Salud
            </h2>
            <h3 className="text-xl">
              ¿Cómo protegerse de la contaminación cerca de OTI?
            </h3>
            <div className="flex gap-8">
              <article>
                <p>
                  Abra las ventanas para que el aire fresco y limpio pase al interior.
                </p>
              </article>
              <article>
                <p>
                  Disfrute actividades al aire libre.
                </p>
              </article>
            </div>
          </section>
          < Chart />
        </main>
      </div>

    </>
  )
}

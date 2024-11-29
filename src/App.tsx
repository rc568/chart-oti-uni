import { Chart } from "./components/Chart";

export function App() {

  return (
    <>
      <div className="flex bg-surfac">
        <aside className="w-16 min-w-16 h-screen bg-[#081A51]">
        </aside>

      <main className="mx-10 my-6">
        <h1 className="font-semibold text-3xl">
          Calidad del aire cerca de OTI, UNI
        </h1>
        <section className="py-9">
          <h2 className="uppercase text-primary font-semibold text-xl">
            Recomendaciones de Salud
          </h2>
          <h3 className="text-xl my-3">
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

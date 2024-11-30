import { Chart } from "./components/Chart";
import { Bike, OpenWindow, Air, CO2, Dashboard } from "./components/icons/";

export function App() {

  return (
    <>
      <div className="flex bg-surface">
        <aside className="min-w-20 min-h-screen bg-[#081A51]">
          <div className="bg-slate-50 w-fit rounded-lg mx-auto mt-6">
            <img src="/uni_logo.png" alt="Logo de la Universidad Nacional de Ingeniería"
              className="w-12"
            />
          </div>
          <nav className="flex flex-col items-center gap-8 mt-32">
            <Dashboard color="#FCFCFC" size="32"></Dashboard>
            <Air color="#FCFCFC" size="32"></Air>
            <CO2 color="#FCFCFC" size="40"></CO2>
          </nav>
        </aside>
        <main className="mx-16 my-6">
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
              <article className="flex items-center gap-4">
                <OpenWindow size="56" color="green"></OpenWindow>
                <p>
                  Abra las ventanas para que el aire fresco y limpio pase al interior.
                </p>
              </article>
              <article className="flex items-center gap-4">
                <Bike size="56" color="green"></Bike>
                <p>
                  Disfrute actividades al aire libre.
                </p>
              </article>
            </div>
          </section>
            <h2 className="uppercase text-primary font-semibold text-xl pb-4">
              Histórico
            </h2>
            < Chart />
        </main>

      </div>
    </>
  )
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { businessDomains, BusinessDomain } from "@/data/domains";
import Wheel from "@/components/Wheel";
import DomainResult from "@/components/DomainResult";
import { Play, RotateCcw } from "lucide-react";

export default function Home() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<BusinessDomain | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setSelectedDomain(null);
    setIsSpinning(true);
  };

  const handleSpinComplete = (domain: BusinessDomain) => {
    setIsSpinning(false);
    setTimeout(() => {
      setSelectedDomain(domain);
    }, 500);
  };

  const handleReset = () => {
    setSelectedDomain(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center gap-3">
            {APP_LOGO && <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {APP_TITLE}
            </h1>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {!selectedDomain ? (
          <div className="space-y-8">
            {/* Título e Descrição */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Roleta de Domínios de Negócio
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Gire a roleta e descubra um domínio de negócio para modelar sua próxima aplicação!
              </p>
            </div>

            {/* Roleta */}
            <div className="flex flex-col items-center gap-8">
              <Wheel
                domains={businessDomains}
                isSpinning={isSpinning}
                onSpinComplete={handleSpinComplete}
              />

              {/* Botão de Girar */}
              <Button
                onClick={handleSpin}
                disabled={isSpinning}
                size="lg"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {isSpinning ? (
                  <>
                    <RotateCcw className="mr-2 h-5 w-5 animate-spin" />
                    Girando...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Girar Roleta
                  </>
                )}
              </Button>
            </div>

            {/* Informações sobre os domínios */}
            <div className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              <p>
                A roleta contém {businessDomains.length} domínios de negócio diferentes, cada um com
                descrições detalhadas, entidades principais, funcionalidades e desafios técnicos.
              </p>
            </div>
          </div>
        ) : (
          <DomainResult domain={selectedDomain} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-12">
        <div className="container py-6 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            Desenvolvido para auxiliar na modelagem de aplicações de diferentes domínios de negócio
          </p>
        </div>
      </footer>
    </div>
  );
}

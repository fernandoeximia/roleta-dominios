import { BusinessDomain } from "@/data/domains";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DomainResultProps {
  domain: BusinessDomain;
  onReset: () => void;
}

export default function DomainResult({ domain, onReset }: DomainResultProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="border-2" style={{ borderColor: domain.color }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold" style={{ color: domain.color }}>
              {domain.name}
            </CardTitle>
            <Badge variant="outline" style={{ borderColor: domain.color, color: domain.color }}>
              Sorteado
            </Badge>
          </div>
          <CardDescription className="text-lg mt-2">{domain.description}</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Entidades Principais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {domain.details.mainEntities.map((entity, index) => (
                <Badge key={index} variant="secondary">
                  {entity}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tecnologias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {domain.details.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Funcionalidades Principais</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {domain.details.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 text-green-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Desafios Técnicos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {domain.details.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 text-orange-500">⚠</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-4">
        <Button onClick={onReset} size="lg" className="px-8">
          Girar Novamente
        </Button>
      </div>
    </div>
  );
}

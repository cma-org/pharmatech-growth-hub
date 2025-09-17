import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work, facilities, and achievements in pharmaceutical quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden hover-scale">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
                  <p className="text-muted-foreground">Gallery Image {item}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Project {item}</h3>
                  <p className="text-muted-foreground text-sm">
                    Description of gallery item {item} showcasing our pharmaceutical expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
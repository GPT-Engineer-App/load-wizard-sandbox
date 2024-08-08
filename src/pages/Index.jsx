import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Info, PawPrint } from "lucide-react";

const catFacts = [
  "Cats have excellent night vision and can see at one-sixth the light level required for human vision.",
  "A group of cats is called a 'clowder'.",
  "Cats spend 70% of their lives sleeping.",
  "A cat's hearing is much more sensitive than humans and dogs.",
  "Cats have over 20 vocalizations, including the meow, purr, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
];

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
  { name: "Maine Coon", description: "One of the largest domesticated cat breeds with a distinctive physical appearance." },
  { name: "Persian", description: "Recognized for their long fur and flat faces." },
  { name: "Bengal", description: "A hybrid breed with a wild appearance resembling leopards." },
  { name: "Scottish Fold", description: "Famous for their folded ears and round faces." },
];

const Index = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-100 to-pink-100">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-8 text-center text-purple-800"
      >
        Fascinating Felines
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="Cute cat" 
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">Discover the World of Cats</h2>
        </motion.div>
        
        <Tabs defaultValue="facts" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts">
              <Info className="mr-2 h-4 w-4" />
              Feline Facts
            </TabsTrigger>
            <TabsTrigger value="breeds">
              <PawPrint className="mr-2 h-4 w-4" />
              Cat Breeds
            </TabsTrigger>
          </TabsList>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle>Did You Know?</CardTitle>
                <CardDescription>Fascinating tidbits about our feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.p 
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg mb-4"
                >
                  {catFacts[currentFactIndex]}
                </motion.p>
                <Button onClick={nextFact}>Next Fact</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
                <CardDescription>Explore some well-known feline varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {catBreeds.map((breed, index) => (
                    <motion.li 
                      key={breed.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <Cat className="mr-2 h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">{breed.name}</h3>
                        <p className="text-sm text-gray-600">{breed.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

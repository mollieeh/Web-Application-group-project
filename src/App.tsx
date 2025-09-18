import { SimpleHeader } from "./components/SimpleHeader";
import { RestaurantGrid } from "./components/RestaurantGrid";

export default function App() {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <SimpleHeader />

      <main className="flex-1 flex flex-col">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-background via-muted to-secondary/20 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Welcome to FrontDash
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose from our featured restaurants
            </p>
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="flex-1 overflow-y-auto">
          <RestaurantGrid />
        </div>
      </main>
    </div>
  );
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home(){
  return <div  className="flex gap-4">
  <Button>
    Primary
  </Button>
  <Button variant="secondary">
    Secondary
  </Button >
  <Button variant="destructive">
    Destructive
  </Button>
  <Button variant="ghost">
  Ghost
  </Button>
  <Button variant="link">
     Link
  </Button>
  <Button variant="teritrary">
     Link
  </Button>
  <Button variant="muted">
     Link
  </Button>
  <Input/>
  </div>
}
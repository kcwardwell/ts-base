import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <p className="text-4xl text-purple-600">Hello Tanstack</p>
)}

import { Link } from "@tanstack/react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Sidebar = () => {

  // const { params } = useParams()
  // console.log(params)
  return <nav className="p-2 flex flex-col w-full gap-2 text-lg h-screen border-r border-slate-500">
    {/* <Link
      to="/reported-sessions/all"
      activeProps={{
        className: 'font-bold',
      }}
    >
      All
    </Link>
    <Link
      to="/invoices/all"
      activeProps={{
        className: 'font-bold',
      }}
    >
      All
    </Link> */}
    <Accordion type="single" className="w-full" collapsible>
      <AccordionItem value="item-1">
        {/* on click redirect to /reported-session/all */}
        <AccordionTrigger>Reported Session</AccordionTrigger>
        <AccordionContent>
          <Link
            to="/reported-sessions/all"
            activeProps={{
              className: 'font-bold w-full',
            }}
            activeOptions={{ exact: true }}
          >
            All
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        {/* on click redirect to /invoives/all */}
        <AccordionTrigger>Invoices</AccordionTrigger>
        <AccordionContent>
          <Link
            to="/invoices/all"
            activeProps={{
              className: 'font-bold w-full',
            }}
          >
            All
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </nav>
}




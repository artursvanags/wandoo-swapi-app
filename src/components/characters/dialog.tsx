import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ReactNode } from "react"

  interface DialogProps {
    title: string
    children: ReactNode
    content:ReactNode
}

export default function InfoDialog({title, children, content} : DialogProps) {
    return (
        <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Information about {title}</DialogTitle>
            <DialogDescription className="text-left">
                {content}
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    )
}
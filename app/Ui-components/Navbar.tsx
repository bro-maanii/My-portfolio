"use client"

import { useState } from "react"
import { Github, Linkedin, Instagram, Facebook, Menu, X } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 overflow-x-hidden max-w-full">
            {/* TODO: take this for all */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent italic font-mono"
                    >
                        Maani
                    </Link>

                    <div className="flex items-center space-x-4">
                        {/* Mode Toggle */}
                        <ModeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-lg p-2 hover:bg-purple-50 transition-colors duration-200"
                        >
                            {isOpen ? <X className="h-6 w-6 text-purple-600" /> : <Menu className="h-6 w-6 text-purple-600" />}
                            <span className="sr-only">Toggle menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="bg-white border-t h-full sm:h-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 text-center">
                        {["Home", "About", "Work", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex items-center justify-center mx-auto space-x-4 px-3 py-8">
                            <Link href="https://www.facebook.com/eman.aliabbasi.5" target="_blank" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.instagram.com/maani.tsx/" target="_blank" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/emanaliabbasi-softwareengineer/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/bro-maanii" target="_blank" className="text-gray-600 hover:text-purple-900 transition-colors duration-200">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

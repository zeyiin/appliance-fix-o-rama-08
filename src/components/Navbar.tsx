
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-repair-blue font-bold text-2xl">
              FixIt<span className="text-repair-orange">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-repair-dark hover:text-repair-blue font-medium">
              Home
            </Link>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-repair-dark hover:text-repair-blue font-medium">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-100 shadow-md">
                  <DropdownMenuItem asChild>
                    <Link to="/services/refrigerator" className="cursor-pointer">
                      Refrigerator Repair
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/washing-machine" className="cursor-pointer">
                      Washing Machine Repair
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/microwave" className="cursor-pointer">
                      Microwave Repair
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/about" className="text-repair-dark hover:text-repair-blue font-medium">
              About
            </Link>
            <Link to="/contact" className="text-repair-dark hover:text-repair-blue font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-repair-orange" />
              <span className="text-repair-dark font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-repair-orange hover:bg-repair-orange/90 text-white">
              Book Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-repair-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-repair-dark hover:text-repair-blue font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="block py-2">
              <div className="font-medium text-repair-dark mb-1">Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/refrigerator"
                  className="block text-repair-dark hover:text-repair-blue py-1"
                  onClick={toggleMenu}
                >
                  Refrigerator Repair
                </Link>
                <Link
                  to="/services/washing-machine"
                  className="block text-repair-dark hover:text-repair-blue py-1"
                  onClick={toggleMenu}
                >
                  Washing Machine Repair
                </Link>
                <Link
                  to="/services/microwave"
                  className="block text-repair-dark hover:text-repair-blue py-1"
                  onClick={toggleMenu}
                >
                  Microwave Repair
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block text-repair-dark hover:text-repair-blue font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-repair-dark hover:text-repair-blue font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2 py-2">
              <Phone className="h-4 w-4 text-repair-orange" />
              <span className="text-repair-dark font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-repair-orange hover:bg-repair-orange/90 text-white w-full">
              Book Service
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

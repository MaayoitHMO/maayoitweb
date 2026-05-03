import { Button } from "@/components/ui/button";
import { CopyPlus, Stethoscope, Search, FileText } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function ProvidersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Provider Network</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            At Maayoit, we partner with the finest hospitals, clinics, and specialists to ensure you receive world-class care wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl h-14 px-8 text-lg">
              <Link href="/providers/find">Find a Provider Near You</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-lg">
              <Link href="/providers/join">Join Our Network</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Extensive Coverage, Zero Compromise</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our network is stringently vetted. We don't just look for facilities; we look for partners who share our core value of empathy. Every clinic in the Maayoit network guarantees prompt attention, transparent billing, and a family-first bedside manner.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">500+ Accredited Partner Hospitals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Specialized Nationwide Search</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">Seamless Digital Claims Process</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
               <Card className="border-none shadow-lg bg-gray-50 flex flex-col items-center justify-center p-8 text-center aspect-square">
                 <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                 <p className="text-gray-600 font-medium">Emergency Access</p>
               </Card>
               <Card className="border-none shadow-lg bg-gray-50 flex flex-col items-center justify-center p-8 text-center aspect-square transform translate-y-6">
                 <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
                 <p className="text-gray-600 font-medium">Claims Approval Rate</p>
               </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

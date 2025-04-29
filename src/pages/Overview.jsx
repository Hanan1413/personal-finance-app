// src/pages/Overview.jsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Overview() {
  return (
    <div className="p-6 grid grid-cols-12 gap-4 w-full">
      {/* current balance */}
      <Card className="col-span-12 md:col-span-4 bg-black text-amber-50  ">
        <CardHeader>
        <CardTitle>Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">$3,500</div>
          <p className="text-sm text-muted-foreground">Total available</p>
        </CardContent>
      </Card>

      {/* Saving Pots */}
      <Card className="col-span-12 md:col-span-4 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Vacation Pot</p>
              <Progress value={65} />
              <p className="text-xs text-muted-foreground">65% to goal</p>
            </div>
            <div>
              <p className="text-sm font-medium">Emergency Fund</p>
              <Progress value={40} />
              <p className="text-xs text-muted-foreground">40% to goal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bills */}
      <Card className="col-span-12 md:col-span-4 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Netflix</span>
              <span className="text-sm text-muted-foreground">Paid</span>
            </div>
            <div className="flex justify-between">
              <span>Spotify</span>
              <span className="text-sm text-muted-foreground">Due soon</span>
            </div>
          </div>
        
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="col-span-12 md:col-span-6 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Pots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Grocery Shopping</span>
              <span>-$120</span>
            </div>
            <div className="flex justify-between">
              <span>Salary</span>
              <span className="text-green-600">+$2,500</span>
            </div>
            <div className="flex justify-between">
              <span>Electricity Bill</span>
              <span>-$80</span>
            </div>
          </div>
       
        </CardContent>
      </Card>

      {/* Budget */}
      <Card className="col-span-12 md:col-span-6 row-span-6 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Budget</CardTitle>
        </CardHeader>
        
      </Card>




        {/* Transaction*/}
        <Card className="col-span-12 md:col-span-6 row-span-12 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Transaction</CardTitle>
        </CardHeader>
        <CardContent>Transaction</CardContent>
      </Card>


      
        {/* Recurring Bills */}
        <Card className="col-span-12 md:col-span-6 row-span-6 bg-white text-black border-0">
        <CardHeader>
          <CardTitle>Recurring Bills</CardTitle>
        </CardHeader>
        
      </Card>
    </div>
  );
}

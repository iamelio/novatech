import React, { useEffect, useState } from "react";
import UserNavbar from "../components/navbar/UserNavbar.jsx";
import "../styles/UserDashboard.css"; // Assuming some base styling from here
import "../styles/Payment.css"; // New CSS for payment page

const Payment = () => {
  const [username, setUsername] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) setUsername(user.name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case "card":
        return (
          <div className="payment-form-section">
            <h3 className="text-xl font-semibold mb-4">Pay with Card</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                <input type="text" id="cardholderName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" id="cardNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="**** **** **** ****" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" id="expiryDate" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="MM/YY" />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" id="cvv" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="123" />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="NG">Nigeria</option>
                  <option value="GH">Ghana</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit Payment
              </button>
            </form>
          </div>
        );
      case "transfer":
        return (
          <div className="payment-form-section">
            <h3 className="text-xl font-semibold mb-4">Pay with Bank Transfer</h3>
            <p className="text-gray-700 mb-2">Please transfer the amount to the following account:</p>
            <p className="font-semibold">Bank Name: Example Bank</p>
            <p className="font-semibold">Account Name: NovaTech Health Services</p>
            <p className="font-semibold">Account Number: 1234567890</p>
            <p className="text-sm text-gray-500 mt-4">
              After transfer, please send a screenshot of the payment confirmation to our support.
            </p>
            <button className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              I have transferred
            </button>
          </div>
        );
      case "ussd":
        return (
          <div className="payment-form-section">
            <h3 className="text-xl font-semibold mb-4">Pay with USSD</h3>
            <p className="text-gray-700 mb-2">Dial the following USSD code from your registered mobile number:</p>
            <p className="text-2xl font-bold text-indigo-600 mb-4">*901*0000000000*Amount#</p>
            <p className="text-sm text-gray-500">
              Replace '0000000000' with our merchant code and 'Amount' with the payment amount.
            </p>
            <button className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              I have paid with USSD
            </button>
          </div>
        );
      default:
        return (
          <p className="text-gray-600">Please select a payment method to proceed.</p>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <UserNavbar username={username} onLogout={handleLogout} />
      <main className="dashboard-main">
        <div className="payment-page-content">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Make a Payment</h1>

          <div className="payment-method-selection mb-8">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="payWithCard"
                name="paymentMethod"
                value="card"
                checked={selectedPaymentMethod === "card"}
                onChange={handlePaymentMethodChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="payWithCard" className="ml-3 block text-base font-medium text-gray-700">
                Pay with Card
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="payWithTransfer"
                name="paymentMethod"
                value="transfer"
                checked={selectedPaymentMethod === "transfer"}
                onChange={handlePaymentMethodChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="payWithTransfer" className="ml-3 block text-base font-medium text-gray-700">
                Pay with Transfer
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="payWithUSSD"
                name="paymentMethod"
                value="ussd"
                checked={selectedPaymentMethod === "ussd"}
                onChange={handlePaymentMethodChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="payWithUSSD" className="ml-3 block text-base font-medium text-gray-700">
                Pay with USSD
              </label>
            </div>
          </div>

          <div className="payment-form-container bg-white shadow overflow-hidden sm:rounded-lg p-6">
            {renderPaymentForm()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;

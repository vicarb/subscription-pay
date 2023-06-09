import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Plan = ({ plan, price, features }) => (
  <div className="flex flex-col bg-white shadow-md rounded-lg p-6 m-3 flex-grow max-w-sm">
    <h2 className="text-2xl font-bold mb-4 text-center">{plan}</h2>
    <h3 className="text-xl font-semibold text-gray-500 mb-6 text-center">${price} / month</h3>
    <ul className="mb-6 space-y-2 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 h-4 w-4" />
          <span className="ml-2">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="mt-auto py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded">
      Subscribe Now
    </button>
  </div>
);

const PricingTable = () => {
  const plans = [
    {
      name: 'Starter Pack',
      price: 100,
      features: ['Up to 5 pieces of content', 'One revision per piece', 'Turnaround time within a week']
      // add more features as needed
    },
    {
      name: 'Growth Plan',
      price: 200,
      features: ['Up to 20 pieces of content', 'Two revisions per piece', 'Turnaround time within 3-5 days', 'Quarterly content strategy consultation']
      // add more features as needed
    },
    {
      name: 'Enterprise Solution',
      price: 400,
      features: ['Unlimited pieces of content', 'Unlimited revisions', 'Turnaround time within 1-3 days', 'Monthly content strategy consultation', 'Access to premium features']
      // add more features as needed
    }
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Plans</h1>
      <div className="flex flex-col items-stretch md:flex-row md:justify-center md:flex-wrap">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan.name} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;

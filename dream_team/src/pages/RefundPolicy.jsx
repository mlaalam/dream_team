
export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">Refund & Cancellation Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last Updated: September 6, 2026</p>

      <p className="mb-6">
        Maarrach LLC provides customized digital services, including Shopify store creation, e-commerce website development, dropshipping website design, and related website design and configuration services. Because our services involve customized digital work and time allocated specifically to each client, refunds are subject to the conditions below.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Before Work Begins</h2>
          <p>
            A client may request cancellation before work on the project has started. If no work has begun and no non-refundable third-party expenses have been incurred, the client may be eligible for a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">After Work Has Begun</h2>
          <p>
            Once work has started, payments corresponding to work already performed are generally non-refundable. If a client cancels after work begins, Maarrach LLC will review the project status and determine whether any portion remains refundable based on work completed, time spent, deliverables provided, and third-party expenses incurred. Any approved refund applies only to the portion of the service not yet performed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Completed and Delivered Services</h2>
          <p>
            Once the agreed digital service has been substantially completed and delivered, payments for completed work are generally non-refundable. Clients should nevertheless contact us if there is a legitimate issue with the delivered service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Revisions and Service Issues</h2>
          <p>
            If delivered work materially differs from the agreed project scope, the client should contact us. Where appropriate and consistent with the agreed scope, we may correct the issue or provide reasonable revisions before considering a refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Third-Party Costs</h2>
          <p className="mb-2">Third-party expenses are generally non-refundable once purchased or activated, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Domain registrations.</li>
            <li>Shopify subscriptions or platform fees.</li>
            <li>Premium themes, applications, plugins, or software.</li>
            <li>Stock images, licensed assets, or other third-party purchases.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Refund Requests</h2>
          <p>
            Refund requests must be submitted by email and should include the client name, project or order information, date of purchase, and reason for the request. We aim to review refund requests within 5 business days. Approved refunds will generally be returned to the original payment method. Processing time after approval depends on the payment provider and financial institution.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Project Cancellation and Disputes</h2>
          <p>
            Clients may request cancellation by contacting Maarrach LLC. Cancellation does not automatically entitle a client to a full refund when work has already begun or expenses have been incurred. If you have a concern regarding a charge or service, please contact us first so we can review and attempt to resolve the issue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-white">Contact</h2>
          <p className="font-medium">Maarrach LLC</p>
          <p>30 N Gould St Ste R</p>
          <p>Sheridan, WY 82801</p>
          <p>United States</p>
          <p className="mt-2">
            Email: <a href="mailto:contact@maarrach.com" className="text-blue-400 underline">contact@maarrach.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
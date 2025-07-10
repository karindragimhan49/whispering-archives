// client/src/app/(main)/entry/[id]/page.jsx

export default function EntryPage({ params }) {
  // In a real app, we would fetch data for params.id from the backend.
  // For now, we'll use mock content.
  const entryId = params.id;

  return (
    <div>
      <div className="border-b border-green-900 pb-2 mb-4">
        <p className="text-sm text-green-600">Item #: {entryId}</p>
        <h1 className="text-4xl font-['VT323',_monospace] text-white">The Stairwell</h1>
        <p className="text-lg text-red-500">Object Class: Keter</p>
      </div>
      
      <div className="space-y-6 text-green-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-['VT323',_monospace] text-green-500 border-b border-green-800 mb-2 pb-1">// SPECIAL CONTAINMENT PROCEDURES</h2>
          <p>
            SCP-087 is to be sealed with a steel door with an electrically-powered locking mechanism. The door must be disguised to resemble a janitorial closet consistent with the design of the building. The locking mechanism on the doorknob will not release unless [DATA EXPUNGED] while turning the key counter-clockwise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-['VT323',_monospace] text-green-500 border-b border-green-800 mb-2 pb-1">// DESCRIPTION</h2>
          <p>
            SCP-087 is an unlit platform staircase. Stairs descend at a 38-degree angle for 13 steps before reaching a semicircular platform. The destination of the staircase is unknown, but is presumed to be over [REDACTED] km below ground level. The anomaly is characterized by a sound of a child crying, estimated to be located approximately 200 meters below the initial platform. However, any attempts to descend the staircase have failed to bring the subject closer to the source.
          </p>
        </section>

         <section>
          <h2 className="text-xl font-['VT323',_monospace] text-red-500 border-b border-red-800 mb-2 pb-1">// INCIDENT LOG 087-I</h2>
          <p className="text-red-300">
             Agent [REDACTED] was sent to explore SCP-087. Subject was equipped with a 75-watt flood lamp and a headset for communication. Contact was lost approximately 45 minutes into the exploration. Following the incident, no personnel are permitted to access SCP-087.
          </p>
        </section>
      </div>
    </div>
  );
}
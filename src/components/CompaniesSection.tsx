const companies = [
  { name: "Telkom Indonesia", initial: "T" },
  { name: "Bangkit Academy", initial: "B" },
  { name: "Google Developer", initial: "G" },
  { name: "ITS Surabaya", initial: "ITS" },
];

const CompaniesSection = () => {
  return (
    <section className="pt-4 pb-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10 animate-fade-up">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Collaborated with
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 animate-fade-up animation-delay-200">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-sm font-bold">{company.initial}</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;

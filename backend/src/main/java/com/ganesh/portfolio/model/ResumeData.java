package com.ganesh.portfolio.model;

import java.util.List;

public class ResumeData {

    private PersonalInfo personalInfo;
    private String professionalSummary;
    private TechnicalSkills technicalSkills;
    private List<Experience> experience;
    private List<Project> projects;
    private List<Education> education;
    private List<String> certifications;
    private List<String> keyStrengths;

    // Getters and setters
    public PersonalInfo getPersonalInfo() { return personalInfo; }
    public void setPersonalInfo(PersonalInfo personalInfo) { this.personalInfo = personalInfo; }

    public String getProfessionalSummary() { return professionalSummary; }
    public void setProfessionalSummary(String professionalSummary) { this.professionalSummary = professionalSummary; }

    public TechnicalSkills getTechnicalSkills() { return technicalSkills; }
    public void setTechnicalSkills(TechnicalSkills technicalSkills) { this.technicalSkills = technicalSkills; }

    public List<Experience> getExperience() { return experience; }
    public void setExperience(List<Experience> experience) { this.experience = experience; }

    public List<Project> getProjects() { return projects; }
    public void setProjects(List<Project> projects) { this.projects = projects; }

    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }

    public List<String> getCertifications() { return certifications; }
    public void setCertifications(List<String> certifications) { this.certifications = certifications; }

    public List<String> getKeyStrengths() { return keyStrengths; }
    public void setKeyStrengths(List<String> keyStrengths) { this.keyStrengths = keyStrengths; }

    // ---- Nested classes ----

    public static class PersonalInfo {
        private String name;
        private String phone;
        private String email;
        private String linkedin;
        private String github;
        private String location;
        private String title;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getLinkedin() { return linkedin; }
        public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
        public String getGithub() { return github; }
        public void setGithub(String github) { this.github = github; }
        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
    }

    public static class TechnicalSkills {
        private List<SkillCategory> categories;

        public List<SkillCategory> getCategories() { return categories; }
        public void setCategories(List<SkillCategory> categories) { this.categories = categories; }
    }

    public static class SkillCategory {
        private String category;
        private List<Skill> skills;

        public String getCategory() { return category; }
        public void setCategory(String category) { this.category = category; }
        public List<Skill> getSkills() { return skills; }
        public void setSkills(List<Skill> skills) { this.skills = skills; }
    }

    public static class Skill {
        private String name;
        private int proficiency; // 0-100

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public int getProficiency() { return proficiency; }
        public void setProficiency(int proficiency) { this.proficiency = proficiency; }
    }

    public static class Experience {
        private String role;
        private String company;
        private String duration;
        private List<String> highlights;

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }
        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }
        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }
        public List<String> getHighlights() { return highlights; }
        public void setHighlights(List<String> highlights) { this.highlights = highlights; }
    }

    public static class Project {
        private String name;
        private String techStack;
        private List<String> highlights;
        private String icon;
        private String liveUrl;
        private String githubUrl;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getTechStack() { return techStack; }
        public void setTechStack(String techStack) { this.techStack = techStack; }
        public List<String> getHighlights() { return highlights; }
        public void setHighlights(List<String> highlights) { this.highlights = highlights; }
        public String getIcon() { return icon; }
        public void setIcon(String icon) { this.icon = icon; }
        public String getLiveUrl() { return liveUrl; }
        public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
        public String getGithubUrl() { return githubUrl; }
        public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    }

    public static class Education {
        private String degree;
        private String institution;
        private String score;
        private String year;

        public String getDegree() { return degree; }
        public void setDegree(String degree) { this.degree = degree; }
        public String getInstitution() { return institution; }
        public void setInstitution(String institution) { this.institution = institution; }
        public String getScore() { return score; }
        public void setScore(String score) { this.score = score; }
        public String getYear() { return year; }
        public void setYear(String year) { this.year = year; }
    }
}

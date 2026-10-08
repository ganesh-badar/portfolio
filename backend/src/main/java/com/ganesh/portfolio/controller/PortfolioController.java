package com.ganesh.portfolio.controller;

import com.ganesh.portfolio.model.ResumeData;
import com.ganesh.portfolio.service.ResumeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final ResumeService resumeService;

    public PortfolioController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @GetMapping("/resume")
    public ResumeData getResume() {
        return resumeService.getResumeData();
    }

    @GetMapping("/health")
    public String health() {
        return "Portfolio API is running!";
    }
}

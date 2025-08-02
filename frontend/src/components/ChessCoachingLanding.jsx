import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Trophy, Star, Mail, ExternalLink, Phone, MapPin, Calendar, Users } from 'lucide-react';
import { mockData } from '../data/mock';

const ChessCoachingLanding = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">♚</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Chess Coaching</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
              <a href="#accomplishments" className="text-slate-600 hover:text-slate-800 transition-colors">Accomplishments</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                  USCF Rated 2100+
                </Badge>
                <h1 className="text-5xl font-bold text-slate-800 leading-tight">
                  Master Your Chess Game with Expert Coaching
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Elevate your chess skills with personalized coaching from a highly-rated USCF player. 
                  Learn winning strategies, tactical patterns, and develop your competitive edge.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg"
                  onClick={() => setIsContactOpen(true)}
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-300 text-slate-700 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('accomplishments').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Credentials
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf" 
                  alt="Chess coaching session"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/6693287/pexels-photo-6693287.jpeg" 
                alt="Chess lesson in progress"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
                <div className="w-16 h-1 bg-slate-800 mb-6"></div>
              </div>
              <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                <p>
                  {mockData.bio.introduction}
                </p>
                <p>
                  {mockData.bio.experience}
                </p>
                <p>
                  {mockData.bio.philosophy}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">50+</div>
                    <div className="text-sm text-slate-600">Students Coached</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section id="accomplishments" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Chess Accomplishments</h2>
            <div className="w-16 h-1 bg-slate-800 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven track record of competitive excellence and continuous improvement in the chess community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mockData.accomplishments.major.map((accomplishment, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{accomplishment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {accomplishment.description}
                  </CardDescription>
                  {accomplishment.year && (
                    <Badge variant="secondary" className="mt-3 bg-slate-100 text-slate-700">
                      {accomplishment.year}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Achievements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Additional Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mockData.accomplishments.additional.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Improve Your Game?</h2>
            <div className="w-16 h-1 bg-slate-800 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Take the first step towards chess mastery. Contact me to discuss your goals and start your coaching journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Me</h3>
                  <p className="text-slate-600 mb-4">Get in touch directly for personalized coaching</p>
                  <Button 
                    variant="outline" 
                    className="border-slate-300 text-slate-700"
                    onClick={() => window.location.href = 'mailto:yogeshchess77@gmail.com'}
                  >
                    yogeshchess77@gmail.com
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Schedule a Session</h3>
                  <p className="text-slate-600 mb-4">Fill out a quick form to get started</p>
                  <Button 
                    className="bg-slate-800 hover:bg-slate-700 text-white"
                    onClick={() => alert('Google Form link will be added here')}
                  >
                    Contact Form
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Initial Assessment</h4>
                <p className="text-slate-600 text-sm">We'll evaluate your current skill level and identify areas for improvement.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Customized Plan</h4>
                <p className="text-slate-600 text-sm">Receive a personalized training program tailored to your goals.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Ongoing Support</h4>
                <p className="text-slate-600 text-sm">Regular sessions with feedback and progress tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-800 font-bold text-sm">♚</span>
              </div>
              <span className="text-xl font-bold">Chess Coaching</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>© 2024 Professional Chess Coaching. All rights reserved.</p>
              <p className="text-sm mt-1">USCF Rated 2100+ • Virginia State Top 10</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChessCoachingLanding;
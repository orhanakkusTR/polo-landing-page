import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { LogOut, Search, Filter, Mail, Phone, MapPin, Calendar, FileText, ExternalLink, Trash2, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  zip_code: string;
  service_type: string;
  message: string;
  attachment_url: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface AdminDashboardPageProps {
  onLogout: () => void;
}

export function AdminDashboardPage({ onLogout }: AdminDashboardPageProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [searchTerm, statusFilter, leads]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('quote_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        lead.phone.includes(term) ||
        lead.address.toLowerCase().includes(term)
      );
    }

    setFilteredLeads(filtered);
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('quote_submissions')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', leadId);

      if (error) throw error;

      setLeads(leads.map(lead =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ));

      if (selectedLead?.id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch (err) {
      console.error('Error updating lead:', err);
    }
  };

  const deleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const { error } = await supabase
        .from('quote_submissions')
        .delete()
        .eq('id', leadId);

      if (error) throw error;

      setLeads(leads.filter(lead => lead.id !== leadId));
      if (selectedLead?.id === leadId) {
        setSelectedLead(null);
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'contacted': return <Mail className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const stats = {
    total: leads.length,
    pending: leads.filter(l => l.status === 'pending').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    completed: leads.filter(l => l.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Lead Management</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-1">Total Leads</div>
            <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-1">Pending</div>
            <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-1">Contacted</div>
            <div className="text-3xl font-bold text-blue-600">{stats.contacted}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-1">Completed</div>
            <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-11 pr-8 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              No leads found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{lead.name}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {lead.zip_code}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900 flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-slate-400" />
                          {lead.email}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
                          <Phone className="w-4 h-4 text-slate-400" />
                          {lead.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-900">{lead.service_type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                          {getStatusIcon(lead.status)}
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {formatDate(lead.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteLead(lead.id);
                          }}
                          className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Lead Details</h2>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-all"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedLead.name}</h3>
                  <p className="text-slate-600 mt-1">Submitted {formatDate(selectedLead.created_at)}</p>
                </div>
                <select
                  value={selectedLead.status}
                  onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
                  className={`px-4 py-2 rounded-lg border-2 font-medium text-sm ${getStatusColor(selectedLead.status)}`}
                >
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Email</span>
                  </div>
                  <a href={`mailto:${selectedLead.email}`} className="text-slate-900 hover:text-slate-700">
                    {selectedLead.email}
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">Phone</span>
                  </div>
                  <a href={`tel:${selectedLead.phone}`} className="text-slate-900 hover:text-slate-700">
                    {selectedLead.phone}
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 md:col-span-2">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Address</span>
                  </div>
                  <p className="text-slate-900">{selectedLead.address}</p>
                  <p className="text-slate-600 text-sm mt-1">ZIP: {selectedLead.zip_code}</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 md:col-span-2">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">Service Type</span>
                  </div>
                  <p className="text-slate-900 font-medium">{selectedLead.service_type}</p>
                </div>

                {selectedLead.message && (
                  <div className="bg-slate-50 rounded-lg p-4 md:col-span-2">
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm font-medium">Message</span>
                    </div>
                    <p className="text-slate-900 whitespace-pre-wrap">{selectedLead.message}</p>
                  </div>
                )}

                {selectedLead.attachment_url && (
                  <div className="bg-slate-50 rounded-lg p-4 md:col-span-2">
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm font-medium">Attachment</span>
                    </div>
                    <a
                      href={selectedLead.attachment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-medium"
                    >
                      View Attachment
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-6 py-2.5 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    deleteLead(selectedLead.id);
                    setSelectedLead(null);
                  }}
                  className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all"
                >
                  Delete Lead
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
